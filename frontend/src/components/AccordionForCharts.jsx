import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import charts from files
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const ChartsContainer = ({ data }) => {
    return (
        <div>
            <Row xs={1} md={2} lg={2} className="g-4">
                {/* RadarChart and PieChart */}
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Radar Chart</Card.Title>
                            <Card.Text>
                                Represents number of projects as per pestle.
                            </Card.Text>
                            <RadarChart serverData={data} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pie Chart</Card.Title>
                            <Card.Text>
                                Represents number of projects as per pestle.
                            </Card.Text>
                            <PieChart serverData={data} />
                        </Card.Body>
                    </Card>
                </Col>
                                {/* BarChart */}
                                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Bar Chart</Card.Title>
                            <Card.Text>
                                Represents number of projects in each sector.
                            </Card.Text>
                            <BarChart serverData={data} />
                        </Card.Body>
                    </Card>
                </Col>

                {/* LineChart */}
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Line Chart</Card.Title>
                            <Card.Text>
                                Represents number of projects as per pestle.
                            </Card.Text>
                            <LineChart serverData={data} />
                        </Card.Body>
                    </Card>
                </Col>
                
                {/* PolarChart and DoughnutChart */}
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Polar Area Chart</Card.Title>
                            <Card.Text>
                                Represents number of countries, sectors, topics, pestles, sources, etc.
                            </Card.Text>
                            <PolarChart serverData={data} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Doughnut Chart</Card.Title>
                            <Card.Text>
                                Represents number of countries, sectors, topics, pestles, sources, etc.
                            </Card.Text>
                            <DoughnutChart serverData={data} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ChartsContainer;
