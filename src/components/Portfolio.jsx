import React from 'react'
import Toolbar from './Toolbar.jsx'
import ProjectList from './ProjectList.jsx'

const projects = [
  { id: 1, img: `${import.meta.env.BASE_URL}img/mon.jpg`, category: 'Business Cards' },
  { id: 2, img: `${import.meta.env.BASE_URL}img/200.jpg`, category: 'Websites' },
  { id: 3, img: `${import.meta.env.BASE_URL}img/emi_haze.jpg`, category: 'Websites' },
  { id: 4, img: `${import.meta.env.BASE_URL}img/codystretch.jpg`, category: 'Websites' },
  { id: 5, img: `${import.meta.env.BASE_URL}img/Triangle_003.jpg`, category: 'Business Cards' },
  { id: 6, img: `${import.meta.env.BASE_URL}img/place200x290.png`, category: 'Websites' },
  { id: 7, img: `${import.meta.env.BASE_URL}img/200.jpg`, category: 'Websites' },
  { id: 8, img: `${import.meta.env.BASE_URL}img/transmission.jpg`, category: 'Business Cards' },
  { id: 9, img: `${import.meta.env.BASE_URL}img/place200x290_1.png`, category: 'Websites' },
  { id: 10, img: `${import.meta.env.BASE_URL}img/place200x290_2.png`, category: 'Flayers' },
  { id: 11, img: `${import.meta.env.BASE_URL}img/the_ninetys_brand.jpg`, category: 'Websites' },
  { id: 12, img: `${import.meta.env.BASE_URL}img/dia.jpg`, category: 'Business Cards' },
  { id: 13, img: `${import.meta.env.BASE_URL}img/Triangle_350x197.jpg`, category: 'Websites' },
  { id: 14, img: `${import.meta.env.BASE_URL}img/emi_haze.jpg`, category: 'Websites' },
  { id: 15, img: `${import.meta.env.BASE_URL}img/transmission.jpg`, category: 'Business Cards' },
  { id: 16, img: `${import.meta.env.BASE_URL}img/Triangle_350x197_1.jpg`, category: 'Websites' },
  { id: 17, img: `${import.meta.env.BASE_URL}img/place200x290_3.png`, category: 'Flayers' },
]

// Уникальные категории из данных, «All» — всегда первым
const filters = ['All', ...new Set(projects.map((p) => p.category))]

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'All',
    }
    this.onSelectFilter = this.onSelectFilter.bind(this)
  }

  onSelectFilter(filter) {
    this.setState({ selected: filter })
  }

  getFilteredProjects() {
    if (this.state.selected === 'All') {
      return projects
    }
    return projects.filter((p) => p.category === this.state.selected)
  }

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.getFilteredProjects()} />
      </div>
    )
  }
}

export default Portfolio