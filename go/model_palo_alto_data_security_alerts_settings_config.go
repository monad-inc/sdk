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

// checks if the PaloAltoDataSecurityAlertsSettingsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PaloAltoDataSecurityAlertsSettingsConfig{}

// PaloAltoDataSecurityAlertsSettingsConfig Palo Alto Data Security Alerts settings
type PaloAltoDataSecurityAlertsSettingsConfig struct {
	// URL of the organization
	BaseUrl *string `json:"base_url,omitempty"`
}

// NewPaloAltoDataSecurityAlertsSettingsConfig instantiates a new PaloAltoDataSecurityAlertsSettingsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPaloAltoDataSecurityAlertsSettingsConfig() *PaloAltoDataSecurityAlertsSettingsConfig {
	this := PaloAltoDataSecurityAlertsSettingsConfig{}
	return &this
}

// NewPaloAltoDataSecurityAlertsSettingsConfigWithDefaults instantiates a new PaloAltoDataSecurityAlertsSettingsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPaloAltoDataSecurityAlertsSettingsConfigWithDefaults() *PaloAltoDataSecurityAlertsSettingsConfig {
	this := PaloAltoDataSecurityAlertsSettingsConfig{}
	return &this
}

// GetBaseUrl returns the BaseUrl field value if set, zero value otherwise.
func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetBaseUrl() string {
	if o == nil || IsNil(o.BaseUrl) {
		var ret string
		return ret
	}
	return *o.BaseUrl
}

// GetBaseUrlOk returns a tuple with the BaseUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetBaseUrlOk() (*string, bool) {
	if o == nil || IsNil(o.BaseUrl) {
		return nil, false
	}
	return o.BaseUrl, true
}

// HasBaseUrl returns a boolean if a field has been set.
func (o *PaloAltoDataSecurityAlertsSettingsConfig) HasBaseUrl() bool {
	if o != nil && !IsNil(o.BaseUrl) {
		return true
	}

	return false
}

// SetBaseUrl gets a reference to the given string and assigns it to the BaseUrl field.
func (o *PaloAltoDataSecurityAlertsSettingsConfig) SetBaseUrl(v string) {
	o.BaseUrl = &v
}

func (o PaloAltoDataSecurityAlertsSettingsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PaloAltoDataSecurityAlertsSettingsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BaseUrl) {
		toSerialize["base_url"] = o.BaseUrl
	}
	return toSerialize, nil
}

type NullablePaloAltoDataSecurityAlertsSettingsConfig struct {
	value *PaloAltoDataSecurityAlertsSettingsConfig
	isSet bool
}

func (v NullablePaloAltoDataSecurityAlertsSettingsConfig) Get() *PaloAltoDataSecurityAlertsSettingsConfig {
	return v.value
}

func (v *NullablePaloAltoDataSecurityAlertsSettingsConfig) Set(val *PaloAltoDataSecurityAlertsSettingsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullablePaloAltoDataSecurityAlertsSettingsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullablePaloAltoDataSecurityAlertsSettingsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePaloAltoDataSecurityAlertsSettingsConfig(val *PaloAltoDataSecurityAlertsSettingsConfig) *NullablePaloAltoDataSecurityAlertsSettingsConfig {
	return &NullablePaloAltoDataSecurityAlertsSettingsConfig{value: val, isSet: true}
}

func (v NullablePaloAltoDataSecurityAlertsSettingsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePaloAltoDataSecurityAlertsSettingsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


