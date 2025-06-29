import './Proposal.css';

const ProposalCard = () => {
    return(
        <div className="proposal-card-container">
                <div className="proposal-card">
                    <div className="proposal-left">
                        <h2 className="card-title">Let's make things happen</h2>

                        <p className="description">
                            Reach out to us today to discover how our tech
                            solutions can empower your business to innovate and
                            excel in the digital landscape
                        </p>

                        <a href="/form"><button className="btn">Get your free proposal</button></a>
                    </div>

                    <div className="proposal-right">
                        <div className="img-container">
                            <img src="/assets/proposal.svg" alt="Proposal Illustration" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProposalCard;