# BizStartAI 

BizStart AI is a comprehensive AI-driven platform designed to empower aspiring entrepreneurs and business owners. It acts as a "Business Paddy," providing expert mentorship, detailed market insights, and a structured journey from initial idea to a full-fledged business plan. By leveraging advanced generative AI, BizStart AI simplifies the complexities of starting a business, making professional guidance accessible to everyone.

## Key Features & Challenges

- **AI Business Mentorship:** A real-time chat interface powered by Google Gemini that provides tailored advice, brainstorming support, and strategic guidance.
- **Interactive Business Journey:** A step-by-step roadmap that tracks progress through idea validation, market research, and financial planning.
- **Dynamic Market Insights:** Automated tools to gather and synthesize industry-specific data, helping users make informed decisions.

### Technical Challenges Overcome
- **State Synchronization:** Managing complex chat history and business progress across a decoupled React frontend and Node.js backend.
- **Secure Authentication:** Implementing a robust multi-provider auth system (Local + Google OAuth) with JWT-based session management and rate limiting.
- **Performance Optimization:** Leveraging Tailwind CSS 4 for a high-performance, utility-first UI that maintains responsiveness across all device sizes.

## Technologies Used

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4, Lucide React, React Hot Toast.
- **Backend:** Node.js, Express.js, Sequelize ORM.
- **Database:** TiDB (MySQL compatible).
- **AI Integration:** Google Generative AI (Gemini Pro).
- **Authentication:** JWT, Google OAuth 2.0.

## Architecture Overview

BizStart AI follows a modern client-server architecture:
- **Frontend:** A Single Page Application (SPA) built with React that communicates with the backend via a RESTful API. It uses Axios for networking and React Router for navigation.
- **Backend:** A Node.js/Express server structured into Controllers, Services, and Models. It handles business logic, AI orchestration, and database interactions.
- **Data Layer:** TiDB serves as the primary relational database, chosen for its horizontal scalability and MySQL compatibility, ensuring the platform can grow with its user base.

## Technical Decisions

- **React 19 & Tailwind 4:** Chosen for state-of-the-art performance and a modernized developer experience, allowing for rapid UI iteration with minimal-runtime overhead.
- **Sequelize ORM:** Selected to provide a type-safe and structured way to interact with the database, facilitating easy migrations and complex relationship mapping.
- **Google Gemini API:** Integrated for its superior reasoning capabilities in business contexts and seamles integration with the existing Google ecosystem.

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- MySQL or TiDB instance
- Google Cloud Console Project (for OAuth and AI API)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Starr365/BizStartAI.git
   cd BizStartAI
   ```
2. **Backend Setup:**
   ```bash
   cd bizstart-backend
   npm install
   cp .env.example .env # Fill in your DB_URL, JWT_SECRET, and GOOGLE_API_KEY
   npm start
   ```
3. **Frontend Setup:**
   ```bash
   cd ../bizstart-frontend
   npm install
   cp .env.example .env # Fill in VITE_API_BASE_URL and VITE_GOOGLE_CLIENT_ID
   npm run dev
   ```

## Folder Structure

```text
├── bizstart-backend
│   ├── src
│   │   ├── controllers    # Request handlers
│   │   ├── models         # Sequelize database models
│   │   ├── routes         # API endpoint definitions
│   │   ├── services       # AI and external integrations
│   │   └── middleware     # Auth and validation logic
├── bizstart-frontend
│   ├── src
│   │   ├── components     # Reusable UI elements
│   │   ├── pages          # Top-level screen components
│   │   ├── api.js         # Axios configuration
│   │   └── assets         # Images and icons
```

## Testing

The project uses a multi-layered testing strategy:
- **Unit Testing:** Logic-heavy services and utility functions.
- **API Testing:** Manual verification of endpoints using Postman.
- **UI Testing:** Responsive design verification across different breakpoints.

To run backend tests (if configured): `npm test`

## License & Support

This project is licensed under the MIT License.
For support or inquiries, please contact the team.

---
*Built with ❤️ by the BizStartAI Team.*
