/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
)

// checks if the BoxEventsSettingsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BoxEventsSettingsConfig{}

// BoxEventsSettingsConfig Box Events secrets
type BoxEventsSettingsConfig struct {
	// A list of event types to filter by.
	EventType []string `json:"event_type,omitempty"`
}

// NewBoxEventsSettingsConfig instantiates a new BoxEventsSettingsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBoxEventsSettingsConfig() *BoxEventsSettingsConfig {
	this := BoxEventsSettingsConfig{}
	return &this
}

// NewBoxEventsSettingsConfigWithDefaults instantiates a new BoxEventsSettingsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBoxEventsSettingsConfigWithDefaults() *BoxEventsSettingsConfig {
	this := BoxEventsSettingsConfig{}
	return &this
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *BoxEventsSettingsConfig) GetEventType() []string {
	if o == nil || IsNil(o.EventType) {
		var ret []string
		return ret
	}
	return o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BoxEventsSettingsConfig) GetEventTypeOk() ([]string, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *BoxEventsSettingsConfig) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given []string and assigns it to the EventType field.
func (o *BoxEventsSettingsConfig) SetEventType(v []string) {
	o.EventType = v
}

func (o BoxEventsSettingsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BoxEventsSettingsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventType) {
		toSerialize["event_type"] = o.EventType
	}
	return toSerialize, nil
}

type NullableBoxEventsSettingsConfig struct {
	value *BoxEventsSettingsConfig
	isSet bool
}

func (v NullableBoxEventsSettingsConfig) Get() *BoxEventsSettingsConfig {
	return v.value
}

func (v *NullableBoxEventsSettingsConfig) Set(val *BoxEventsSettingsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableBoxEventsSettingsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableBoxEventsSettingsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBoxEventsSettingsConfig(val *BoxEventsSettingsConfig) *NullableBoxEventsSettingsConfig {
	return &NullableBoxEventsSettingsConfig{value: val, isSet: true}
}

func (v NullableBoxEventsSettingsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBoxEventsSettingsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


