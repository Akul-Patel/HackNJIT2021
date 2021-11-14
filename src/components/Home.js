import React from 'react'
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            {/* <h1>Home component</h1> */}

            <Banner />

            <div className="home__section">
                <Card
                    src="c6c1882a1cd83a05830b7b5af1f77c96.jpg"
                    title="New Experiences"
                    description="Unique activities your pet can experience, led by a world of hosts."
                />
                <Card
                    src="Bird-room-Credit-Lise-Durocher-small-e1429120465752.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to stay for your pet."
                />
                <Card
                    src="Pet-Friendly-Home-Decor-Tips-4.jpeg"
                    title="Safe Place"
                    description="Safer, Comfortable, and private place for pets, with our range of experienced hosts."
                />
            </div>
            <div className='home__section'>
                <Card
                    src="/img1.jpg"
                    title="Sara Heston"
                    description="Superhost with a years of experience in pet care."
                    price="$30/night"
                />
                <Card
                    src="/img4Home.jpg"
                    title="Valerie Jackson"
                    description="This super hosts enjoys company of Cats and Dogs."
                    price="$75/night"
                />
                <Card
                    src="parrots_111013_1.jpg"
                    title="Stephen Curry"
                    description="Superhost with love for all animals."
                    price="$100/night"
                />
            </div>
        </div>
    )
}

export default Home
