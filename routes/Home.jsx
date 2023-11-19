import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'
import HeroSection from '../components/HeroSection'

const Home = () => {

    const [ quotesArray, setQuotesArray ] = React.useState([])

    const handleAddQuote = (newQuote) => {
        setQuotesArray([...quotesArray, newQuote])
        console.log(quotesArray)
    }
    return (
        <>
        <HeroSection onAdd={handleAddQuote} quotesArray={quotesArray} />
        <QuotesDisplay setQuotesArray= {setQuotesArray} quotesArray={quotesArray} />
        </>
        )
    }

export default Home

    

