const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-semibold text-green-600 mb-4">About My Food Ordering App</h1>
            <p className="text-lg text-gray-700 max-w-xl text-center mb-4">
                Welcome to my food ordering app! Whether craving favorite dishes or exploring new flavors, this app has you covered.
                It makes it easy to order food from various restaurants, track deliveries, and enjoy meals in no time.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>Browse a wide range of cuisines</li>
                <li>Order food with just a few taps</li>
                <li>View detailed order information</li>
                <li>Manage your cart efficiently</li>
                <li>Reliable and quick service</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Mission</h2>
            <p className="text-lg text-gray-700 max-w-xl text-center">
                The mission is to create a seamless, quick, and enjoyable food ordering experience. Partnering with local restaurants to offer the best deals and freshest meals delivered right to your door.
            </p>
        </div>
    );
}

export default About;