import { View, Text, Button, ScrollView, Image } from 'react-native';
import { ThemedView } from '../../components/ThemedView';
import { ThemedText } from '../../components/ThemedText';

export default function HomeScreen() {
	return (
		<ScrollView>
			<ThemedView
				style={{
					paddingTop: 20,
					paddingLeft: 6,
					paddingRight: 6
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: 700
					}}
				>
					Sell Online Courses & More
				</Text>
				<Text
					style={{
						marginTop: 5
					}}
				>
					Create, manage, and sell your digital products easily.
				</Text>
				<Image
					source={require('@/assets/images/sample1.webp')}
					style={{ width: '100%', height: 250, marginTop: 10 }}
				/>
				<Button title='Get Started' onPress={() => console.log('Sign Up')} />
			</ThemedView>

			<ThemedView
				style={{
					marginTop: 5,
					padding: 6
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: 600
					}}
				>
					Why Choose Us?
				</Text>
				<Text>
					We handle payments, hosting, and everything else so you can focus on
					content.
				</Text>
				<Image
					source={require('@/assets/images/sample2.jpeg')}
					style={{
						width: '100%',
						height: 300,
						marginTop: 10,
						objectFit: 'cover'
					}}
				/>
			</ThemedView>

			<ThemedView
				style={{
					marginTop: 5,
					padding: 6
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: 600
					}}
				>
					Features
				</Text>
				<Text>- Sell courses, webinars, and digital products</Text>
				<Text>- Built-in payment processing</Text>
				<Text>- Simple and intuitive interface</Text>
			</ThemedView>
		</ScrollView>
	);
}
