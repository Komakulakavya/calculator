let displayValue = '0';
        let isResultDisplayed = false;

        function input(value) {
            if (isResultDisplayed) {
                displayValue = value === '.' ? '0.' : value;
                isResultDisplayed = false;
            } else {
                if (displayValue === '0' && value !== '.') {
                    displayValue = value;
                } else {
                    displayValue += value;
                }
            }
            updateDisplay();
        }

        function clearEntry() {
            displayValue = displayValue.slice(0, -1) || '0';
            updateDisplay();
        }

        function clearDisplay() {
            displayValue = '0';
            updateDisplay();
        }

        function toggleSign() {
            displayValue = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
            updateDisplay();
        }

        function calculate() {
            try {
                displayValue = eval(displayValue).toString();
                isResultDisplayed = true;
            } catch (error) {
                displayValue = 'Error';
            }
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').innerText = displayValue;
        }