"use client";

import {
  Box,
  Button,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";


type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        const el = chatContainerRef.current;
        if (!el) return;

        el.scrollTop = el.scrollHeight;
    }, [messages, isTyping]);


    const sendMessage = async () => {
        const userMessage: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);
        const newMessages = [...messages, userMessage];
        const res = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({
            messages: newMessages,
            }),
        });

        const reader = res.body?.getReader();
        if (!reader) return;

        let assistantText = "";

        setMessages(prev => [...prev, { role: "assistant", content: "" }]);

        const decoder = new TextDecoder();

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            assistantText += chunk;

            setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = {
                role: "assistant",
                content: assistantText,
            };
            return updated;
            });
        }

        setIsTyping(false);
    };

    return (
        <Box
            mx="auto"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
            overflow="hidden"
        >
        <VStack spacing={3} align="stretch" h="320px">
            <Box 
                ref={chatContainerRef}
                flex="1" 
                overflowY="auto"
                h="320px"
            >
                <VStack spacing={3} align="stretch">
                    {messages.map((msg, idx) => (
                    <Box
                        key={idx}
                        alignSelf={
                        msg.role === "user"
                            ? "flex-end"
                            : "flex-start"
                        }
                        bg={
                        msg.role === "user"
                            ? "blue.500"
                            : ""
                        }
                        color={
                        msg.role === "user"
                            ? "white"
                            : "black"
                        }
                        px={3}
                        py={2}
                        borderRadius="md"
                        maxW="80%"
                    >
                        <Text fontSize="sm" whiteSpace="pre-wrap">
                        {msg.content}
                        </Text>
                    </Box>
                    ))}

                    {isTyping && (
                        <HStack>
                            <Spinner size="sm" />
                            <Text fontSize="sm">AI is typing...</Text>
                        </HStack>
                    )}
                </VStack>
                <div ref={bottomRef} />
            </Box>

            <HStack>
                <Input
                    placeholder="Ketik pesan..."
                    value={input}
                    onChange={(e: any) => setInput(e.target.value)}
                    onKeyDown={(e: any) =>
                        e.key === "Enter" && sendMessage()
                    }
                />
                <Button
                    colorScheme="blue"
                    onClick={sendMessage}
                    isDisabled={isTyping}
                >
                    Send
                </Button>
            </HStack>
        </VStack>
        </Box>
    );
}
