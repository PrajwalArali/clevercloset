import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import NavBar from '../layouts/Navbar';
function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <h1>Welcome {loggedInUser}</h1>
            <p>
            Mindful Consumption:

Quality over Quantity: Prioritize purchasing high-quality, durable clothing that lasts longer, reducing the frequency of replacements.
Capsule Wardrobes: Curate a minimal wardrobe with versatile pieces that can be mixed and matched, promoting thoughtful purchasing.

Ethical Sourcing:

Eco-friendly Materials: Choose garments made from sustainable materials like organic cotton, Tencel, or recycled fibers, which have a lower environmental impact.
Transparent Supply Chains: Support brands that prioritize ethical labor practices, ensuring fair wages and safe working conditions for garment workers.

Secondhand and Upcycling:

Thrift Shopping: Embrace secondhand clothing to extend the lifecycle of garments and reduce demand for new production.
Upcycling: Transform old or damaged clothing into new items, fostering creativity while minimizing waste.

Care and Maintenance:

Proper Washing: Reduce energy and water use by washing clothes in cold water and air-drying when possible.
Repairs: Learn basic sewing skills to mend and repair clothing, extending its life and reducing the need for new purchases.

End-of-Life Solutions:

Recycling Programs: Participate in clothing recycling initiatives to divert textiles from landfills. Many brands now offer take-back programs.
Donation: Give gently used clothing to charities or local organizations, ensuring items are reused rather than discarded.
            </p>
            <button onClick={handleLogout}>Logout</button>
            
            <ToastContainer />
        </div>
    )
}

export default Home
