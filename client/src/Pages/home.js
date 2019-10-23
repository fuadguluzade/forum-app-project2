import React, { Component } from 'react';
import Header from '../Components/Header';
import SearchForm from '../Components/SearchForm';
import RenderResults from '../Components/Results';
import API from '../Utils/API';
import { Container, CardDeck, Alert } from 'react-bootstrap';

class Home extends Component {
    state = {
        data: [],
        queryWord: '',
        qInTitle: false,
        pageSize: 20,
        language: '',
        languages: [],
        sortBy: 'publishedAt',
        error: ''
    };

    componentDidMount() {
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
        
        if (name === "language") {
            if (!value) {
                this.setState({ language: '' })
                return;
            }
            this.setState({
                language: this.state.languages.find(language => language[value])[value]
            })

        } else {
            this.setState({
                [name]: value
            })
        }
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        let query = `q=${this.state.queryWord}&`;
        let qInTitle = `qInTitle=${this.state.queryWord}&`;
        let keyword = this.state.qInTitle ? qInTitle : query;
        let pageSize = `pageSize=${this.state.pageSize}&`;
        let language = this.state.language ? `language=${this.state.language}&` : '';
        let sortBy = `sortBy=${this.state.sortBy}&`;
        let queryUrl = keyword + pageSize + language + sortBy;
        console.log(queryUrl)
        API.getNews(queryUrl)
            .then(response => {
                if (response.data.status === "error") {
                    throw new Error(response.data.message);
                }
                this.setState({error: "", data: response.data.articles });
            }).then(() => {
                localStorage.clear();
                localStorage.setItem('newsData', JSON.stringify(this.state.data));
            })
            .catch(err => this.setState({ error: err.message }));
    };

    handleChange = event => {
        event.target.checked ? this.setState({ qInTitle: true }) : this.setState({ qInTitle: false })
    }


    render() {
        return (
            <div>
                <Header />

                <Container style={{position: "relative"}}>
                    <Alert variant="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
                        {this.state.error}
                    </Alert>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        languages={this.state.languages}
                        qInTitle={this.qInTitle}
                        handleChange={this.handleChange}
                    />
                    <CardDeck>
                        <RenderResults results={this.state.data} />
                    </CardDeck>
                </Container>
            </div>
        )
    }
}

export default Home;