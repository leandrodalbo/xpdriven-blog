const Article1 = () => (
    <article className="p-6 bg-gray-800  border border-yellow-400 rounded-lg shadow-lg">

        <h1 className="text-2xl text-gray-200 md:text-3xl font-bold mb-6">Article1 Header</h1>

        {[
            "Testing data until it is properly created...",
            "Second paragraph on article 1."
        ].map((it, index) => (
            <p key={index} className="mt-4 text-gray-100 leading-relaxed">
                {it}
            </p>
        ))}

    </article>
);

export default Article1;
