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

// checks if the VulnerabilitiesSecretsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &VulnerabilitiesSecretsConfig{}

// VulnerabilitiesSecretsConfig CrowdStrike EDR vulnerabilities secrets
type VulnerabilitiesSecretsConfig struct {
	ClientId *ModelsSecret `json:"client_id,omitempty"`
	ClientSecret *ModelsSecret `json:"client_secret,omitempty"`
}

// NewVulnerabilitiesSecretsConfig instantiates a new VulnerabilitiesSecretsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVulnerabilitiesSecretsConfig() *VulnerabilitiesSecretsConfig {
	this := VulnerabilitiesSecretsConfig{}
	return &this
}

// NewVulnerabilitiesSecretsConfigWithDefaults instantiates a new VulnerabilitiesSecretsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVulnerabilitiesSecretsConfigWithDefaults() *VulnerabilitiesSecretsConfig {
	this := VulnerabilitiesSecretsConfig{}
	return &this
}

// GetClientId returns the ClientId field value if set, zero value otherwise.
func (o *VulnerabilitiesSecretsConfig) GetClientId() ModelsSecret {
	if o == nil || IsNil(o.ClientId) {
		var ret ModelsSecret
		return ret
	}
	return *o.ClientId
}

// GetClientIdOk returns a tuple with the ClientId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VulnerabilitiesSecretsConfig) GetClientIdOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.ClientId) {
		return nil, false
	}
	return o.ClientId, true
}

// HasClientId returns a boolean if a field has been set.
func (o *VulnerabilitiesSecretsConfig) HasClientId() bool {
	if o != nil && !IsNil(o.ClientId) {
		return true
	}

	return false
}

// SetClientId gets a reference to the given ModelsSecret and assigns it to the ClientId field.
func (o *VulnerabilitiesSecretsConfig) SetClientId(v ModelsSecret) {
	o.ClientId = &v
}

// GetClientSecret returns the ClientSecret field value if set, zero value otherwise.
func (o *VulnerabilitiesSecretsConfig) GetClientSecret() ModelsSecret {
	if o == nil || IsNil(o.ClientSecret) {
		var ret ModelsSecret
		return ret
	}
	return *o.ClientSecret
}

// GetClientSecretOk returns a tuple with the ClientSecret field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VulnerabilitiesSecretsConfig) GetClientSecretOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.ClientSecret) {
		return nil, false
	}
	return o.ClientSecret, true
}

// HasClientSecret returns a boolean if a field has been set.
func (o *VulnerabilitiesSecretsConfig) HasClientSecret() bool {
	if o != nil && !IsNil(o.ClientSecret) {
		return true
	}

	return false
}

// SetClientSecret gets a reference to the given ModelsSecret and assigns it to the ClientSecret field.
func (o *VulnerabilitiesSecretsConfig) SetClientSecret(v ModelsSecret) {
	o.ClientSecret = &v
}

func (o VulnerabilitiesSecretsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o VulnerabilitiesSecretsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ClientId) {
		toSerialize["client_id"] = o.ClientId
	}
	if !IsNil(o.ClientSecret) {
		toSerialize["client_secret"] = o.ClientSecret
	}
	return toSerialize, nil
}

type NullableVulnerabilitiesSecretsConfig struct {
	value *VulnerabilitiesSecretsConfig
	isSet bool
}

func (v NullableVulnerabilitiesSecretsConfig) Get() *VulnerabilitiesSecretsConfig {
	return v.value
}

func (v *NullableVulnerabilitiesSecretsConfig) Set(val *VulnerabilitiesSecretsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableVulnerabilitiesSecretsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableVulnerabilitiesSecretsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVulnerabilitiesSecretsConfig(val *VulnerabilitiesSecretsConfig) *NullableVulnerabilitiesSecretsConfig {
	return &NullableVulnerabilitiesSecretsConfig{value: val, isSet: true}
}

func (v NullableVulnerabilitiesSecretsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVulnerabilitiesSecretsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


