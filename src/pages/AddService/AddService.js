import React from 'react';

const AddService = () => {


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.imgURL.value;
        const Price = form.price.value;
        const text = form.text.value;
        const email = form.email.value;

        const services = {
            title: name,
            details: text,
            Price,
            img,
            email
        }
        fetch('https://assignment-review-server.vercel.app/reviewadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Data Added to Service successfully')
                    console.log(data)
                    form.reset()
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <div className='mt-12'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered input-secondary w-full" required />
                    <input type="text" name='price' placeholder="price" className="input input-bordered input-secondary w-full" required />
                    <input type="text" name='imgURL' placeholder="imgURL" className="input input-bordered input-secondary w-full" required />
                    <input type="email" name='email' placeholder="your email" className="input input-bordered input-secondary w-full" />
                </div>
                <textarea name='text' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                <input className='btn mb-4' type="submit" value="Add To Service" />
            </form>
        </div>
    );
};

export default AddService;