const currencySelects = {
        from: document.getElementById('fromCurrency'),
        to: document.getElementById('toCurrency')
      };
      
      // Example currencies for the dropdown
      const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD', 'CNY'];

      // Populate the select elements
      currencies.forEach(currency => {
        let optionFrom = new Option(currency, currency);
        let optionTo = new Option(currency, currency);
        currencySelects.from.add(optionFrom);
        currencySelects.to.add(optionTo);
      });

      // Currency switching button
      document.getElementById('switchCurrency').addEventListener('click', function() {
        const temp = currencySelects.from.value;
        currencySelects.from.value = currencySelects.to.value;
        currencySelects.to.value = temp;
      });

      // Handle currency conversion (example conversion rate function)
      document.getElementById('btn').addEventListener('click', function() {
        const amount = document.getElementById('userValue').value;
        const fromCurrency = currencySelects.from.value;
        const toCurrency = currencySelects.to.value;

        if (!amount || amount <= 0) {
          document.getElementById('status').textContent = 'Please enter a valid amount';
          return;
        }

        document.getElementById('status').textContent = '';

        // Simulating a conversion rate
        const rate = getConversionRate(fromCurrency, toCurrency);
        const convertedAmount = (amount * rate).toFixed(2);

        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      });

      // Example of a simple rate retrieval function
      function getConversionRate(fromCurrency, toCurrency) {
        // Mock conversion rates
        const rates = {
          'USD': { 'EUR': 0.85, 'GBP': 0.76, 'INR': 73.5, 'JPY': 109.5, 'CAD': 1.25, 'AUD': 1.35, 'CNY': 6.45, 'NZD': 1.42, 'CHF': 0.93, 'SGD': 1.36 },
          'EUR': { 'USD': 1.18, 'GBP': 0.90, 'INR': 86.5, 'JPY': 129.8, 'CAD': 1.47, 'AUD': 1.59, 'CNY': 7.60, 'NZD': 1.67, 'CHF': 1.10, 'SGD': 1.60 },
          'GBP': { 'USD': 1.32, 'EUR': 1.11, 'INR': 96.5, 'JPY': 144.8, 'CAD': 1.65, 'AUD': 1.80, 'CNY': 8.57, 'NZD': 1.85, 'CHF': 1.20, 'SGD': 1.75 },
          'INR': { 'USD': 0.014, 'EUR': 0.011, 'GBP': 0.010, 'JPY': 1.45, 'CAD': 0.018, 'AUD': 0.017, 'CNY': 0.083, 'NZD': 0.020, 'CHF': 0.012, 'SGD': 0.019 },
          'JPY': { 'USD': 0.0091, 'EUR': 0.0077, 'GBP': 0.0069, 'INR': 0.69, 'CAD': 0.012, 'AUD': 0.011, 'CNY': 0.059, 'NZD': 0.013, 'CHF': 0.0085, 'SGD': 0.012 },
          'CAD': { 'USD': 0.80, 'EUR': 0.68, 'GBP': 0.61, 'INR': 58.0, 'JPY': 83.0, 'AUD': 1.04, 'CNY': 5.25, 'NZD': 1.11, 'CHF': 0.85, 'SGD': 1.00 },
          'AUD': { 'USD': 0.74, 'EUR': 0.63, 'GBP': 0.56, 'INR': 55.0, 'JPY': 78.5, 'CAD': 0.96, 'CNY': 4.95, 'NZD': 1.05, 'CHF': 0.79, 'SGD': 0.92 },
          'CNY': { 'USD': 0.15, 'EUR': 0.13, 'GBP': 0.12, 'INR': 12.0, 'JPY': 16.8, 'CAD': 0.19, 'AUD': 0.20, 'NZD': 0.23, 'CHF': 0.15, 'SGD': 0.18 },
          'NZD': { 'USD': 0.70, 'EUR': 0.60, 'GBP': 0.54, 'INR': 52.0, 'JPY': 74.0, 'CAD': 0.94, 'AUD': 0.95, 'CNY': 4.35, 'CHF': 0.76, 'SGD': 0.90 },
          'CHF': { 'USD': 1.08, 'EUR': 0.91, 'GBP': 0.83, 'INR': 80.0, 'JPY': 117.0, 'CAD': 1.18, 'AUD': 1.27, 'CNY': 6.67, 'NZD': 1.32, 'SGD': 1.05 },
          'SGD': { 'USD': 0.74, 'EUR': 0.63, 'GBP': 0.56, 'INR': 55.0, 'JPY': 78.5, 'CAD': 0.96, 'AUD': 1.04, 'CNY': 4.95, 'NZD': 1.05, 'CHF': 0.95 },
      };
      
        if (fromCurrency === toCurrency) return 1;
        return rates[fromCurrency]?.[toCurrency] || 1; // Default to 1 if no rate is found
      }