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

// checks if the SlackgroupsSettingsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SlackgroupsSettingsConfig{}

// SlackgroupsSettingsConfig Slack Groups settings
type SlackgroupsSettingsConfig struct {
	// Cron expression for scheduling the input
	Cron *string `json:"cron,omitempty"`
	// Team ID to filter user results by
	TeamId *string `json:"team_id,omitempty"`
}

// NewSlackgroupsSettingsConfig instantiates a new SlackgroupsSettingsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSlackgroupsSettingsConfig() *SlackgroupsSettingsConfig {
	this := SlackgroupsSettingsConfig{}
	return &this
}

// NewSlackgroupsSettingsConfigWithDefaults instantiates a new SlackgroupsSettingsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSlackgroupsSettingsConfigWithDefaults() *SlackgroupsSettingsConfig {
	this := SlackgroupsSettingsConfig{}
	return &this
}

// GetCron returns the Cron field value if set, zero value otherwise.
func (o *SlackgroupsSettingsConfig) GetCron() string {
	if o == nil || IsNil(o.Cron) {
		var ret string
		return ret
	}
	return *o.Cron
}

// GetCronOk returns a tuple with the Cron field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SlackgroupsSettingsConfig) GetCronOk() (*string, bool) {
	if o == nil || IsNil(o.Cron) {
		return nil, false
	}
	return o.Cron, true
}

// HasCron returns a boolean if a field has been set.
func (o *SlackgroupsSettingsConfig) HasCron() bool {
	if o != nil && !IsNil(o.Cron) {
		return true
	}

	return false
}

// SetCron gets a reference to the given string and assigns it to the Cron field.
func (o *SlackgroupsSettingsConfig) SetCron(v string) {
	o.Cron = &v
}

// GetTeamId returns the TeamId field value if set, zero value otherwise.
func (o *SlackgroupsSettingsConfig) GetTeamId() string {
	if o == nil || IsNil(o.TeamId) {
		var ret string
		return ret
	}
	return *o.TeamId
}

// GetTeamIdOk returns a tuple with the TeamId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SlackgroupsSettingsConfig) GetTeamIdOk() (*string, bool) {
	if o == nil || IsNil(o.TeamId) {
		return nil, false
	}
	return o.TeamId, true
}

// HasTeamId returns a boolean if a field has been set.
func (o *SlackgroupsSettingsConfig) HasTeamId() bool {
	if o != nil && !IsNil(o.TeamId) {
		return true
	}

	return false
}

// SetTeamId gets a reference to the given string and assigns it to the TeamId field.
func (o *SlackgroupsSettingsConfig) SetTeamId(v string) {
	o.TeamId = &v
}

func (o SlackgroupsSettingsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SlackgroupsSettingsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Cron) {
		toSerialize["cron"] = o.Cron
	}
	if !IsNil(o.TeamId) {
		toSerialize["team_id"] = o.TeamId
	}
	return toSerialize, nil
}

type NullableSlackgroupsSettingsConfig struct {
	value *SlackgroupsSettingsConfig
	isSet bool
}

func (v NullableSlackgroupsSettingsConfig) Get() *SlackgroupsSettingsConfig {
	return v.value
}

func (v *NullableSlackgroupsSettingsConfig) Set(val *SlackgroupsSettingsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableSlackgroupsSettingsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableSlackgroupsSettingsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSlackgroupsSettingsConfig(val *SlackgroupsSettingsConfig) *NullableSlackgroupsSettingsConfig {
	return &NullableSlackgroupsSettingsConfig{value: val, isSet: true}
}

func (v NullableSlackgroupsSettingsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSlackgroupsSettingsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


