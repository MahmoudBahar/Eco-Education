import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background
  },
  heading: {
    fontSize: 26,
    marginBottom: 20,
    color: '#00215E', // Dark blue for text
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '75%', // Decreased width for a sleeker look
    padding: 25,
    backgroundColor: '#FFC55A', // Light orange for modern pop
    borderRadius: 15,
    marginBottom: 25,
    elevation: 6, // For shadow (Android)
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#2C4E80', // Lighter blue for input borders
    borderWidth: 1.5,
    backgroundColor: '#FFFFFF', // Keep input background white
  },
  vkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C75A3', // VK official color
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    width: '70%', // Decreased button width
    justifyContent: 'center',
    elevation: 4, // Button shadow for modern look
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  telegramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0088cc', // Telegram official color
    padding: 12,
    borderRadius: 10,
    width: '70%', // Decreased button width
    justifyContent: 'center',
    elevation: 4, // Button shadow for modern look
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#00215E', // Dark blue text for consistency
    textDecorationLine: 'underline',
  },
});
