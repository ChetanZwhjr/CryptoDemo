import React, { Component } from "react";
import { View, Text, } from "react-native";
import styles from "./HeaderStyle";

const Header = (props) => {

	const { title, containerStyle, } = props;

		return(
			<View style={[styles.homeContainer,containerStyle ]} >
                <View style={styles.headerLeft}>
				<View style={styles.homeLogo}>
		 		<Text style={styles.homeText} >{title}</Text>		
			 </View>
                </View>
                
               
            </View>
		)
	
}

export default Header;

