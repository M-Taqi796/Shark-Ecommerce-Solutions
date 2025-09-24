const Features = () => {
    return (
        <div className="grid grid-cols-4 mx-40 mb-20 gap-6">
            <div className="flex items-center gap-2 px-6 py-1.5 border border-fontSecondary rounded-md">
                <img src="/diamond.svg" alt="" />
                <div>
                    <p>Upwork</p>
                    <p>100% Success Rate</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-1.5 border border-fontSecondary rounded-md">
                <img src="/handshake.svg" alt="" />
                <div>
                    <p>92% Client</p>
                    <p>Retention Rate</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-1.5 border border-fontSecondary rounded-md">
                <img src="/manager.svg" alt="" />
                <div>
                    <p>Dedicated</p>
                    <p>R&D Manager</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-1.5 border border-fontSecondary rounded-md">
                <img src="/SpendManager.svg" alt="" />
                <div>
                    <p>ROAS Across</p>
                    <p>Ad-Spend Managed</p>
                </div>
            </div>
        </div>
    )
}
export default Features