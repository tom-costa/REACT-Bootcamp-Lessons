class App extends React.Component {
  render() {
    return (
      <div>
       <Friend
        name="Elton"
        hobbies={['Piano', 'Singing', 'Gaming']} />
       <Friend
        name="Paul"
        hobbies={['Guitar', 'Kayaking', 'Sleeping']} />
       <Friend
        name="Erica"
        hobbies={['Eating', 'Boozing', 'Partying']} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))