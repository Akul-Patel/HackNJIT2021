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
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="New Experiences"
                    description="Unique activities your pet can experience, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to stay for your pet."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
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
                    src="img5Home.jpg"
                    title="Stephanie Knapp"
                    description="Superhost with love for all animals."
                    price="$100/night"
                />
            </div>
        </div>
    )
}

export default Home
