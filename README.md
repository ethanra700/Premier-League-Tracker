
A RESTful API that serves Premier League player statistics, letting users search and filter hundreds of players by name, team, position, and nation. Built with Spring Boot and PostgreSQL, it uses Spring Data JPA for efficient data persistence and exposes full CRUD functionality through a clean, layered architecture.

<img width="1448" height="1086" alt="premierleaguetrackerlogo" src="https://github.com/user-attachments/assets/3ffa2344-5738-4fcd-a39e-36091b2a8d3e" />


## Features
- Query players by name, team, position, or nation
- Full CRUD operations on player records
- Persistent storage with Spring Data JPA

## Tech Stack
- **Backend:** Java 17, Spring Boot, Spring Data JPA
- **Database:** PostgreSQL
- **Build:** Maven

## Getting Started

### Prerequisites
- Java 17+
- PostgreSQL
- Maven

### Setup
1. Clone the repo
```bash
   git clone https://github.com/ethanra700/Premier-League-Tracker.git
   cd Premier-League-Tracker
```
2. Create a database
```sql
   CREATE DATABASE prem_stats;
```
3. Add your credentials in `src/main/resources/application.properties`
```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/prem_stats
   spring.datasource.username=[your_username]
   spring.datasource.password=[your_password]
```
4. Run it
```bash
   ./mvnw spring-boot:run
```
The API runs at `http://localhost:8080`.

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/player` | Get all players |
| GET | `/api/v1/player?team={team}` | Filter by team |
| GET | `/api/v1/player?name={name}` | Search by name |
| POST | `/api/v1/player` | Add a player |
| PUT | `/api/v1/player` | Update a player |
| DELETE | `/api/v1/player/{name}` | Delete a player |
