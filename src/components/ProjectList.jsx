function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <img key={project.id} src={project.img} alt={project.category} />
      ))}
    </div>
  )
}

export default ProjectList
