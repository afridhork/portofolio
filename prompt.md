afridho@afridho-Yoga-Slim-7-14IMH9:~$ docker ps -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED        STATUS                      PORTS                                         NAMES
ce56c46d93a3   tms-app                  "docker-php-entrypoi…"   8 weeks ago    Exited (0) 3 weeks ago                                                    tms_app
a62d85c3ecf4   monitoring_malaria-app   "docker-php-entrypoi…"   2 months ago   Exited (0) 2 months ago                                                   malaria_app
132cab6de86b   mysql:8.0                "docker-entrypoint.s…"   2 months ago   Exited (0) 2 months ago                                                   mysql80
6c86d7675185   mysql:5.7                "docker-entrypoint.s…"   2 months ago   Exited (0) 4 weeks ago                                                    mysql57
a47b77f5785f   frapperpnextlocal16      "/bin/bash"              2 months ago   Exited (137) 18 hours ago                                                 erpnext16local
bd5cb5b68d1e   mariadb114               "docker-entrypoint.s…"   2 months ago   Up 3 days                   0.0.0.0:3309->3306/tcp, [::]:3309->3306/tcp   mariadb114
