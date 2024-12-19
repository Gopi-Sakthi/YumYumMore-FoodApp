const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 p-4 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Contact</h1>
            <p className="text-lg text-gray-700 mb-2">Feel free to reach out!</p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Email</h2>
            <p className="text-lg text-gray-600 mb-4">gopinath3369@gmail.com</p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Phone</h2>
            <p className="text-lg text-gray-600 mb-4">+91-6379455372</p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Follow</h2>
            <p className="text-lg text-gray-700 mb-2">Stay connected on social media:</p>
            <p className="text-lg">
                <a href="https://www.linkedin.com/in/gopinath-s-gs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a> | 
                <a href="mailto:gopinath3369@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Email</a> 
            </p>
        </div>
    );
}

export default Contact;