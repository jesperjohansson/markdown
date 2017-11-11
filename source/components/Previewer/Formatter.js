import marked from 'marked';

class Formatter {
  static format(input) {
    try {
      return marked(input);
    } catch (e) {
      return input;
    }
  }
}

export default Formatter;
