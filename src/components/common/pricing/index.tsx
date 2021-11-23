import React from 'react';
import '../../../styles/common/pricing.scss'
import Button from '../button';

interface iPricing {
    name: string
}

function Pricing(props: iPricing) {
    const { name } = props;
    return (
        <div className="pricing-wrapper">

            <div className="pricing-container">
                <div className="table-main">
                    <span className="eyebrow-label">Lorem Ipsum is simply </span>

                    <h2>{name}</h2>
                    <div className="pricing-label">Aliquam fermentum elit ex, bibendum euismod dui cursus in. Nulla facilisi. Sed placerat magna non quam sagittis, in sodales magna scelerisque. </div>
                    <div>
                        <Button btnname="Button" btntype="primary-btn-icon" />
                    </div>
                </div>

                <table className="pricing-table">

                    <tr>
                        <td colSpan={2}><h5>Carpet cleaning (min $89.00)</h5></td>

                    </tr>
                    <tr>
                        <td>Per room up to 200 sq. ft</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>Per room up to 400 sq. ft</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>Per Star</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                </table>
                <table className="pricing-table">

                    <tr>
                        <td colSpan={2}><h5>Package Pricing</h5></td>

                    </tr>
                    <tr>
                        <td>2 rooms and hall</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>3 rooms and hall</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>4 rooms and hall</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>5 rooms and hall</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>6 rooms and hall</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                    <tr>
                        <td>7 rooms and hall</td>
                        <td className="tdborder">$400.00</td>

                    </tr>
                </table>
                <div><h5>Add-ons</h5></div>
                <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                </ul>
            </div>
        </div>
    );
}

export default Pricing;
