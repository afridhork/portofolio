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
import { useLenis } from "@studio-freight/react-lenis";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatContent() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const lenis = useLenis();
    
    useEffect(() => {
        if (!lenis || !bottomRef.current) return;

        lenis.scrollTo(bottomRef.current, {
        offset: -16,
        immediate: false,
        });
    }, [messages, isTyping, lenis]);

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
    <VStack spacing={3} align="stretch" h="310px">
      <Box
        ref={chatContainerRef}
        flex="1"
        h="310px"
        overflow="hidden" // ❗ Lenis controls scroll
      >
        <VStack spacing={3} align="stretch">
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              alignSelf={msg.role === "user" ? "flex-end" : "flex-start"}
              bg={msg.role === "user" ? "blue.500" : ""}
              color={msg.role === "user" ? "white" : "black"}
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

          {/* SCROLL TARGET */}
          <div ref={bottomRef} />
        </VStack>
      </Box>

      <HStack>
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
          onKeyDown={(e: any) => e.key === "Enter" && sendMessage()}
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
  );
}
