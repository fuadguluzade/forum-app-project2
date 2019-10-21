import React, { Component } from 'react';
import Header from '../Components/Header';
import SearchForm from '../Components/SearchForm';
import RenderResults from '../Components/Results';
import API from '../Utils/API';
import { Container } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
class App extends Component {
    state = {
        data: [],
        queryWord: '',
        qInTitle: false,
        source: '',
        sources: [],
        dateFrom: '',
        dateTo: '',
        language: '',
        languages: [],
        sortBy: ''
    };

    componentDidMount() {
        API.getSources()
            .then(res => {
                this.setState({
                    sources: res.data
                })
            })

        API.getLanguages()
            .then(res => {
                this.setState({
                    languages: res.data
                })
            })
    }


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(this.state.sources.find(obj => obj.getString(value)))
        if (name === "source") {
            this.setState({
                source: this.state.sources.find(obj => Object.values(obj))
            })
            // console.log('source='+this.state.source)
        }

        if (name === "language") {
            this.setState({
                language: this.state.languages[Object.keys(value)]
            })
            // console.log('language='+this.state.language)
        } else {
            this.setState({
                [name]: value
            })
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let query = `q=${this.state.queryWord}&`;
        // console.log(this.state.source)
        // console.log(this.state.language)
        // API.getNews(query)
        //     .then(response => {
        //         this.setState({ data: response.data.articles });

        //     })
        //     .catch(e => { console.log(e) })
    };



    render() {
        return (
            <div>
                <Header />
                <Container>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        sources={this.state.sources}
                        languages={this.state.languages}
                    />
                    <CardDeck>
                        <RenderResults results={this.state.data} />
                    </CardDeck>
                </Container>
            </div>
        )
    }
}

export default App;