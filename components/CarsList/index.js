import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";

import CarItem from "../CarItem";
import cars from "./cars";

const CarsList = (props) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => (
					<CarItem key={item.name} car={item} />
				)}
				snapToAlignment={"start"}
				decelerationRate={"VeryFast"}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get("window").height}
			/>
		</View>
	);
};

export default CarsList;
