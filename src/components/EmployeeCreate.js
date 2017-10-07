import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {

	renderDaysOfWeek() {
		const daysOfWeek = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];

		return daysOfWeek.map((value) => {
			return (
				<Picker.Item key={value} label={value} value={value} />
			);
		});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555555555"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>
				</CardSection>

				<CardSection>
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						{this.renderDaysOfWeek()}
					</Picker>
				</CardSection>

				<CardSection>
					<Button>
						Save
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);

