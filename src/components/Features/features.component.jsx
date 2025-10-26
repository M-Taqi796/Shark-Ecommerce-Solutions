const Features = () => {
    return (
        <div className="grid grid-cols-4 mx-40 mb-20 gap-6 max-[75rem]:mx-20 max-[62.5rem]:grid-cols-2 max-[41.25rem]:mx-10 max-[26.5rem]:grid-cols-1">
            <div className="flex items-center gap-2 max-[75rem]:gap-1 w-full px-6 max-[75rem]:px-2 py-1.5 border border-fontSecondary rounded-md">
                <img src="/diamond.svg" alt="" />
                <div className="text-sm max-sm:text-ssm">
                    <p>Upwork</p>
                    <p>100% Success Rate</p>
                </div>
            </div>
            <div className="flex items-center gap-2 max-[75rem]:gap-1 w-full px-6 max-[75rem]:px-2 py-1.5 border border-fontSecondary rounded-md">
                <img src="/handshake.svg" alt="" />
                <div className="text-sm max-sm:text-ssm">
                    <p>97% Client</p>
                    <p>Retention Rate</p>
                </div>
            </div>
            <div className="flex items-center gap-2 max-[75rem]:gap-1 w-full px-6 max-[75rem]:px-2 py-1.5 border border-fontSecondary rounded-md">
                <img src="/manager.svg" alt="" />
                <div className="text-sm max-sm:text-ssm">
                    <p>Dedicated</p>
                    <p>R&D Manager</p>
                </div>
            </div>
            <div className="flex items-center gap-2 max-[75rem]:gap-1 w-full px-6 max-[75rem]:px-2 py-1.5 border border-fontSecondary rounded-md">
                <img src="/SpendManager.svg" alt="" />
                <div className="text-sm max-sm:text-ssm">
                    <p>ROAS Across</p>
                    <p>Ad-Spend Managed</p>
                </div>
            </div>
        </div>
    )
}
export default Features