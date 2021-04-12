import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStep: 0,
      formNum: 0,
      f1: {
        name: '',
        email: '',
        password: ''
      },
      f2: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
      },
      f3: {
        cc: '',
        exp: '',
        cvv: '',
        billZip: ''
      }
    };
    this.click = this.click.bind(this);
  };

  click(e) {
    e.preventDefault();

  };

  render() {
    if (this.state.formStep === 0) {
      return(
        <div>
          <form>
            <input
            type="button"
            value="Proceed to Checkout"
            />
          </form>
        </div>
      )
    } else if (this.state.formStep === 1) {
      return(
        <div>

        </div>
      )
    } else if (this.state.formStep === 2) {
      return(
        <div>

        </div>
      )
    } else if (this.state.formStep === 3) {
      return(
        <div>

        </div>
      )
    }
  };
};

ReactDOM.render(<App />, document.getElementById('app'));