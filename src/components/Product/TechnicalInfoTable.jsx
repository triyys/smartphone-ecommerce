const TechnicalInfoTable = ({ tech_info }) => {
    return (
        <table className="product-description__content expand">
            <tbody>
                <tr>
                    <th>Hệ điều hành</th>
                    <td>{tech_info.OS}</td>
                </tr>
                <tr>
                    <th>RAM</th>
                    <td>{tech_info.RAM}</td>
                </tr>
                <tr>
                    <th>ROM</th>
                    <td>{tech_info.ROM}</td>
                </tr>
                <tr>
                    <th>Bluetooth</th>
                    <td>{tech_info.bluetooth}</td>
                </tr>
                <tr>
                    <th>Chipset</th>
                    <td>{tech_info.chipset}</td>
                </tr>
                <tr>
                    <th>Camera trước</th>
                    <td>{tech_info.front_camera}</td>
                </tr>
                <tr>
                    <th>Camera sau</th>
                    <td>{tech_info.rear_camera}</td>
                </tr>
                <tr>
                    <th>Dung lượng pin</th>
                    <td>{tech_info.pin}</td>
                </tr>
                <tr>
                    <th>Độ phân giải</th>
                    <td>{tech_info.screen_resolution}</td>
                </tr>
                <tr>
                    <th>Kích cỡ màn hình</th>
                    <td>{tech_info.screen_size}</td>
                </tr>
                <tr>
                    <th>Công nghệ màn hình</th>
                    <td>{tech_info.screen_tech}</td>
                </tr>
                <tr>
                    <th>Khe sim</th>
                    <td>{tech_info.sim}</td>
                </tr>
                <tr>
                    <th>Kích cỡ</th>
                    <td>{tech_info.size}</td>
                </tr>
                <tr>
                    <th>Trọng lượng</th>
                    <td>{tech_info.weight}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TechnicalInfoTable