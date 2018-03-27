'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = { count: 0 };
        _this.handlerAddOne = _this.handlerAddOne.bind(_this);
        _this.handlerMinusOne = _this.handlerMinusOne.bind(_this);
        _this.handlerReset = _this.handlerReset.bind(_this);

        return _this;
    }

    _createClass(Counter, [{
        key: 'handlerAddOne',
        value: function handlerAddOne() {
            this.setState(function (prevState, props) {
                return { count: prevState.count + 1 };
            });
        }
    }, {
        key: 'handlerMinusOne',
        value: function handlerMinusOne() {
            this.setState({ count: this.state.count - 1 });
        }
    }, {
        key: 'handlerReset',
        value: function handlerReset() {
            this.setState({ count: 0 });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Count:',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlerAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlerMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlerReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
