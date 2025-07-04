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

// checks if the RoutesV2InputConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutesV2InputConfig{}

// RoutesV2InputConfig struct for RoutesV2InputConfig
type RoutesV2InputConfig struct {
	Secrets *RoutesV2InputConfigSecrets `json:"secrets,omitempty"`
	Settings *RoutesV2InputConfigSettings `json:"settings,omitempty"`
}

// NewRoutesV2InputConfig instantiates a new RoutesV2InputConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutesV2InputConfig() *RoutesV2InputConfig {
	this := RoutesV2InputConfig{}
	return &this
}

// NewRoutesV2InputConfigWithDefaults instantiates a new RoutesV2InputConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutesV2InputConfigWithDefaults() *RoutesV2InputConfig {
	this := RoutesV2InputConfig{}
	return &this
}

// GetSecrets returns the Secrets field value if set, zero value otherwise.
func (o *RoutesV2InputConfig) GetSecrets() RoutesV2InputConfigSecrets {
	if o == nil || IsNil(o.Secrets) {
		var ret RoutesV2InputConfigSecrets
		return ret
	}
	return *o.Secrets
}

// GetSecretsOk returns a tuple with the Secrets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesV2InputConfig) GetSecretsOk() (*RoutesV2InputConfigSecrets, bool) {
	if o == nil || IsNil(o.Secrets) {
		return nil, false
	}
	return o.Secrets, true
}

// HasSecrets returns a boolean if a field has been set.
func (o *RoutesV2InputConfig) HasSecrets() bool {
	if o != nil && !IsNil(o.Secrets) {
		return true
	}

	return false
}

// SetSecrets gets a reference to the given RoutesV2InputConfigSecrets and assigns it to the Secrets field.
func (o *RoutesV2InputConfig) SetSecrets(v RoutesV2InputConfigSecrets) {
	o.Secrets = &v
}

// GetSettings returns the Settings field value if set, zero value otherwise.
func (o *RoutesV2InputConfig) GetSettings() RoutesV2InputConfigSettings {
	if o == nil || IsNil(o.Settings) {
		var ret RoutesV2InputConfigSettings
		return ret
	}
	return *o.Settings
}

// GetSettingsOk returns a tuple with the Settings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesV2InputConfig) GetSettingsOk() (*RoutesV2InputConfigSettings, bool) {
	if o == nil || IsNil(o.Settings) {
		return nil, false
	}
	return o.Settings, true
}

// HasSettings returns a boolean if a field has been set.
func (o *RoutesV2InputConfig) HasSettings() bool {
	if o != nil && !IsNil(o.Settings) {
		return true
	}

	return false
}

// SetSettings gets a reference to the given RoutesV2InputConfigSettings and assigns it to the Settings field.
func (o *RoutesV2InputConfig) SetSettings(v RoutesV2InputConfigSettings) {
	o.Settings = &v
}

func (o RoutesV2InputConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutesV2InputConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Secrets) {
		toSerialize["secrets"] = o.Secrets
	}
	if !IsNil(o.Settings) {
		toSerialize["settings"] = o.Settings
	}
	return toSerialize, nil
}

type NullableRoutesV2InputConfig struct {
	value *RoutesV2InputConfig
	isSet bool
}

func (v NullableRoutesV2InputConfig) Get() *RoutesV2InputConfig {
	return v.value
}

func (v *NullableRoutesV2InputConfig) Set(val *RoutesV2InputConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutesV2InputConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutesV2InputConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutesV2InputConfig(val *RoutesV2InputConfig) *NullableRoutesV2InputConfig {
	return &NullableRoutesV2InputConfig{value: val, isSet: true}
}

func (v NullableRoutesV2InputConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutesV2InputConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


