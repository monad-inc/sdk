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

// checks if the SecretProcessesorEnrichmentConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SecretProcessesorEnrichmentConfig{}

// SecretProcessesorEnrichmentConfig struct for SecretProcessesorEnrichmentConfig
type SecretProcessesorEnrichmentConfig struct {
	Secrets *SecretProcessesorEnrichmentConfigSecrets `json:"secrets,omitempty"`
	Settings *SecretProcessesorEnrichmentConfigSettings `json:"settings,omitempty"`
}

// NewSecretProcessesorEnrichmentConfig instantiates a new SecretProcessesorEnrichmentConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSecretProcessesorEnrichmentConfig() *SecretProcessesorEnrichmentConfig {
	this := SecretProcessesorEnrichmentConfig{}
	return &this
}

// NewSecretProcessesorEnrichmentConfigWithDefaults instantiates a new SecretProcessesorEnrichmentConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSecretProcessesorEnrichmentConfigWithDefaults() *SecretProcessesorEnrichmentConfig {
	this := SecretProcessesorEnrichmentConfig{}
	return &this
}

// GetSecrets returns the Secrets field value if set, zero value otherwise.
func (o *SecretProcessesorEnrichmentConfig) GetSecrets() SecretProcessesorEnrichmentConfigSecrets {
	if o == nil || IsNil(o.Secrets) {
		var ret SecretProcessesorEnrichmentConfigSecrets
		return ret
	}
	return *o.Secrets
}

// GetSecretsOk returns a tuple with the Secrets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SecretProcessesorEnrichmentConfig) GetSecretsOk() (*SecretProcessesorEnrichmentConfigSecrets, bool) {
	if o == nil || IsNil(o.Secrets) {
		return nil, false
	}
	return o.Secrets, true
}

// HasSecrets returns a boolean if a field has been set.
func (o *SecretProcessesorEnrichmentConfig) HasSecrets() bool {
	if o != nil && !IsNil(o.Secrets) {
		return true
	}

	return false
}

// SetSecrets gets a reference to the given SecretProcessesorEnrichmentConfigSecrets and assigns it to the Secrets field.
func (o *SecretProcessesorEnrichmentConfig) SetSecrets(v SecretProcessesorEnrichmentConfigSecrets) {
	o.Secrets = &v
}

// GetSettings returns the Settings field value if set, zero value otherwise.
func (o *SecretProcessesorEnrichmentConfig) GetSettings() SecretProcessesorEnrichmentConfigSettings {
	if o == nil || IsNil(o.Settings) {
		var ret SecretProcessesorEnrichmentConfigSettings
		return ret
	}
	return *o.Settings
}

// GetSettingsOk returns a tuple with the Settings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SecretProcessesorEnrichmentConfig) GetSettingsOk() (*SecretProcessesorEnrichmentConfigSettings, bool) {
	if o == nil || IsNil(o.Settings) {
		return nil, false
	}
	return o.Settings, true
}

// HasSettings returns a boolean if a field has been set.
func (o *SecretProcessesorEnrichmentConfig) HasSettings() bool {
	if o != nil && !IsNil(o.Settings) {
		return true
	}

	return false
}

// SetSettings gets a reference to the given SecretProcessesorEnrichmentConfigSettings and assigns it to the Settings field.
func (o *SecretProcessesorEnrichmentConfig) SetSettings(v SecretProcessesorEnrichmentConfigSettings) {
	o.Settings = &v
}

func (o SecretProcessesorEnrichmentConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SecretProcessesorEnrichmentConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Secrets) {
		toSerialize["secrets"] = o.Secrets
	}
	if !IsNil(o.Settings) {
		toSerialize["settings"] = o.Settings
	}
	return toSerialize, nil
}

type NullableSecretProcessesorEnrichmentConfig struct {
	value *SecretProcessesorEnrichmentConfig
	isSet bool
}

func (v NullableSecretProcessesorEnrichmentConfig) Get() *SecretProcessesorEnrichmentConfig {
	return v.value
}

func (v *NullableSecretProcessesorEnrichmentConfig) Set(val *SecretProcessesorEnrichmentConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableSecretProcessesorEnrichmentConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableSecretProcessesorEnrichmentConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSecretProcessesorEnrichmentConfig(val *SecretProcessesorEnrichmentConfig) *NullableSecretProcessesorEnrichmentConfig {
	return &NullableSecretProcessesorEnrichmentConfig{value: val, isSet: true}
}

func (v NullableSecretProcessesorEnrichmentConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSecretProcessesorEnrichmentConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


