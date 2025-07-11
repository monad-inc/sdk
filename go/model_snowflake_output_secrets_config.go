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

// checks if the SnowflakeOutputSecretsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SnowflakeOutputSecretsConfig{}

// SnowflakeOutputSecretsConfig Snowflake Output Secrets
type SnowflakeOutputSecretsConfig struct {
	Password *ModelsSecret `json:"password,omitempty"`
	PrivateKey *ModelsSecret `json:"private_key,omitempty"`
}

// NewSnowflakeOutputSecretsConfig instantiates a new SnowflakeOutputSecretsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSnowflakeOutputSecretsConfig() *SnowflakeOutputSecretsConfig {
	this := SnowflakeOutputSecretsConfig{}
	return &this
}

// NewSnowflakeOutputSecretsConfigWithDefaults instantiates a new SnowflakeOutputSecretsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSnowflakeOutputSecretsConfigWithDefaults() *SnowflakeOutputSecretsConfig {
	this := SnowflakeOutputSecretsConfig{}
	return &this
}

// GetPassword returns the Password field value if set, zero value otherwise.
func (o *SnowflakeOutputSecretsConfig) GetPassword() ModelsSecret {
	if o == nil || IsNil(o.Password) {
		var ret ModelsSecret
		return ret
	}
	return *o.Password
}

// GetPasswordOk returns a tuple with the Password field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SnowflakeOutputSecretsConfig) GetPasswordOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.Password) {
		return nil, false
	}
	return o.Password, true
}

// HasPassword returns a boolean if a field has been set.
func (o *SnowflakeOutputSecretsConfig) HasPassword() bool {
	if o != nil && !IsNil(o.Password) {
		return true
	}

	return false
}

// SetPassword gets a reference to the given ModelsSecret and assigns it to the Password field.
func (o *SnowflakeOutputSecretsConfig) SetPassword(v ModelsSecret) {
	o.Password = &v
}

// GetPrivateKey returns the PrivateKey field value if set, zero value otherwise.
func (o *SnowflakeOutputSecretsConfig) GetPrivateKey() ModelsSecret {
	if o == nil || IsNil(o.PrivateKey) {
		var ret ModelsSecret
		return ret
	}
	return *o.PrivateKey
}

// GetPrivateKeyOk returns a tuple with the PrivateKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SnowflakeOutputSecretsConfig) GetPrivateKeyOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.PrivateKey) {
		return nil, false
	}
	return o.PrivateKey, true
}

// HasPrivateKey returns a boolean if a field has been set.
func (o *SnowflakeOutputSecretsConfig) HasPrivateKey() bool {
	if o != nil && !IsNil(o.PrivateKey) {
		return true
	}

	return false
}

// SetPrivateKey gets a reference to the given ModelsSecret and assigns it to the PrivateKey field.
func (o *SnowflakeOutputSecretsConfig) SetPrivateKey(v ModelsSecret) {
	o.PrivateKey = &v
}

func (o SnowflakeOutputSecretsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SnowflakeOutputSecretsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Password) {
		toSerialize["password"] = o.Password
	}
	if !IsNil(o.PrivateKey) {
		toSerialize["private_key"] = o.PrivateKey
	}
	return toSerialize, nil
}

type NullableSnowflakeOutputSecretsConfig struct {
	value *SnowflakeOutputSecretsConfig
	isSet bool
}

func (v NullableSnowflakeOutputSecretsConfig) Get() *SnowflakeOutputSecretsConfig {
	return v.value
}

func (v *NullableSnowflakeOutputSecretsConfig) Set(val *SnowflakeOutputSecretsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableSnowflakeOutputSecretsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableSnowflakeOutputSecretsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSnowflakeOutputSecretsConfig(val *SnowflakeOutputSecretsConfig) *NullableSnowflakeOutputSecretsConfig {
	return &NullableSnowflakeOutputSecretsConfig{value: val, isSet: true}
}

func (v NullableSnowflakeOutputSecretsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSnowflakeOutputSecretsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


