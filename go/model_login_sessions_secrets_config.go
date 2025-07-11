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

// checks if the LoginSessionsSecretsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LoginSessionsSecretsConfig{}

// LoginSessionsSecretsConfig CrowdStrike EDR login sessions secrets
type LoginSessionsSecretsConfig struct {
	ClientId *ModelsSecret `json:"client_id,omitempty"`
	ClientSecret *ModelsSecret `json:"client_secret,omitempty"`
}

// NewLoginSessionsSecretsConfig instantiates a new LoginSessionsSecretsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLoginSessionsSecretsConfig() *LoginSessionsSecretsConfig {
	this := LoginSessionsSecretsConfig{}
	return &this
}

// NewLoginSessionsSecretsConfigWithDefaults instantiates a new LoginSessionsSecretsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLoginSessionsSecretsConfigWithDefaults() *LoginSessionsSecretsConfig {
	this := LoginSessionsSecretsConfig{}
	return &this
}

// GetClientId returns the ClientId field value if set, zero value otherwise.
func (o *LoginSessionsSecretsConfig) GetClientId() ModelsSecret {
	if o == nil || IsNil(o.ClientId) {
		var ret ModelsSecret
		return ret
	}
	return *o.ClientId
}

// GetClientIdOk returns a tuple with the ClientId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LoginSessionsSecretsConfig) GetClientIdOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.ClientId) {
		return nil, false
	}
	return o.ClientId, true
}

// HasClientId returns a boolean if a field has been set.
func (o *LoginSessionsSecretsConfig) HasClientId() bool {
	if o != nil && !IsNil(o.ClientId) {
		return true
	}

	return false
}

// SetClientId gets a reference to the given ModelsSecret and assigns it to the ClientId field.
func (o *LoginSessionsSecretsConfig) SetClientId(v ModelsSecret) {
	o.ClientId = &v
}

// GetClientSecret returns the ClientSecret field value if set, zero value otherwise.
func (o *LoginSessionsSecretsConfig) GetClientSecret() ModelsSecret {
	if o == nil || IsNil(o.ClientSecret) {
		var ret ModelsSecret
		return ret
	}
	return *o.ClientSecret
}

// GetClientSecretOk returns a tuple with the ClientSecret field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LoginSessionsSecretsConfig) GetClientSecretOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.ClientSecret) {
		return nil, false
	}
	return o.ClientSecret, true
}

// HasClientSecret returns a boolean if a field has been set.
func (o *LoginSessionsSecretsConfig) HasClientSecret() bool {
	if o != nil && !IsNil(o.ClientSecret) {
		return true
	}

	return false
}

// SetClientSecret gets a reference to the given ModelsSecret and assigns it to the ClientSecret field.
func (o *LoginSessionsSecretsConfig) SetClientSecret(v ModelsSecret) {
	o.ClientSecret = &v
}

func (o LoginSessionsSecretsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LoginSessionsSecretsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ClientId) {
		toSerialize["client_id"] = o.ClientId
	}
	if !IsNil(o.ClientSecret) {
		toSerialize["client_secret"] = o.ClientSecret
	}
	return toSerialize, nil
}

type NullableLoginSessionsSecretsConfig struct {
	value *LoginSessionsSecretsConfig
	isSet bool
}

func (v NullableLoginSessionsSecretsConfig) Get() *LoginSessionsSecretsConfig {
	return v.value
}

func (v *NullableLoginSessionsSecretsConfig) Set(val *LoginSessionsSecretsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableLoginSessionsSecretsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableLoginSessionsSecretsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLoginSessionsSecretsConfig(val *LoginSessionsSecretsConfig) *NullableLoginSessionsSecretsConfig {
	return &NullableLoginSessionsSecretsConfig{value: val, isSet: true}
}

func (v NullableLoginSessionsSecretsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLoginSessionsSecretsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


