## 00 - Sample Node Server

This sample will only contain a sample node server with a docker setup to run it

- `docker compose up -d`: Start the container in detached mode
- `docker ps -a`: List all containers
- `docker exec -it CONTAINER-ID sh`: Opens shell for given container
- `docker compose down --rmi all`: Clear all containers and images