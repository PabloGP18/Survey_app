import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import Header from './components/header/Header'
import './App.scss'
import Footer from './components/footer/Footer'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/survey" element={<SurveyPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
