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

// checks if the TenableVulnerabilitiesCronSettingsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TenableVulnerabilitiesCronSettingsConfig{}

// TenableVulnerabilitiesCronSettingsConfig Tenable assets settings
type TenableVulnerabilitiesCronSettingsConfig struct {
	// Cron expression to schedule the data collection.
	Cron *string `json:"cron,omitempty"`
}

// NewTenableVulnerabilitiesCronSettingsConfig instantiates a new TenableVulnerabilitiesCronSettingsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTenableVulnerabilitiesCronSettingsConfig() *TenableVulnerabilitiesCronSettingsConfig {
	this := TenableVulnerabilitiesCronSettingsConfig{}
	return &this
}

// NewTenableVulnerabilitiesCronSettingsConfigWithDefaults instantiates a new TenableVulnerabilitiesCronSettingsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTenableVulnerabilitiesCronSettingsConfigWithDefaults() *TenableVulnerabilitiesCronSettingsConfig {
	this := TenableVulnerabilitiesCronSettingsConfig{}
	return &this
}

// GetCron returns the Cron field value if set, zero value otherwise.
func (o *TenableVulnerabilitiesCronSettingsConfig) GetCron() string {
	if o == nil || IsNil(o.Cron) {
		var ret string
		return ret
	}
	return *o.Cron
}

// GetCronOk returns a tuple with the Cron field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TenableVulnerabilitiesCronSettingsConfig) GetCronOk() (*string, bool) {
	if o == nil || IsNil(o.Cron) {
		return nil, false
	}
	return o.Cron, true
}

// HasCron returns a boolean if a field has been set.
func (o *TenableVulnerabilitiesCronSettingsConfig) HasCron() bool {
	if o != nil && !IsNil(o.Cron) {
		return true
	}

	return false
}

// SetCron gets a reference to the given string and assigns it to the Cron field.
func (o *TenableVulnerabilitiesCronSettingsConfig) SetCron(v string) {
	o.Cron = &v
}

func (o TenableVulnerabilitiesCronSettingsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TenableVulnerabilitiesCronSettingsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Cron) {
		toSerialize["cron"] = o.Cron
	}
	return toSerialize, nil
}

type NullableTenableVulnerabilitiesCronSettingsConfig struct {
	value *TenableVulnerabilitiesCronSettingsConfig
	isSet bool
}

func (v NullableTenableVulnerabilitiesCronSettingsConfig) Get() *TenableVulnerabilitiesCronSettingsConfig {
	return v.value
}

func (v *NullableTenableVulnerabilitiesCronSettingsConfig) Set(val *TenableVulnerabilitiesCronSettingsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableTenableVulnerabilitiesCronSettingsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableTenableVulnerabilitiesCronSettingsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTenableVulnerabilitiesCronSettingsConfig(val *TenableVulnerabilitiesCronSettingsConfig) *NullableTenableVulnerabilitiesCronSettingsConfig {
	return &NullableTenableVulnerabilitiesCronSettingsConfig{value: val, isSet: true}
}

func (v NullableTenableVulnerabilitiesCronSettingsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTenableVulnerabilitiesCronSettingsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


