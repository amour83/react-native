import React, { Component } from 'react';
import {Card} from 'react-native-elements';
import { ScrollView,Text} from 'react-native';
import { PARTNERS } from '../shared/partners';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        Contact: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card
                    title={"Contact Information"}
                    wrapperStyle={{ margin: 20 }}
                >
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text>U.S.A.</Text>
                    <Text></Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    </Card>
                    </Animatable.View>
            </ScrollView>


        );
    }
}

export default Contact;