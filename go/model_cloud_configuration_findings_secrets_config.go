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

// checks if the CloudConfigurationFindingsSecretsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CloudConfigurationFindingsSecretsConfig{}

// CloudConfigurationFindingsSecretsConfig Wiz cloud configuration findings secrets
type CloudConfigurationFindingsSecretsConfig struct {
	ClientId *ModelsSecret `json:"client_id,omitempty"`
	ClientSecret *ModelsSecret `json:"client_secret,omitempty"`
}

// NewCloudConfigurationFindingsSecretsConfig instantiates a new CloudConfigurationFindingsSecretsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCloudConfigurationFindingsSecretsConfig() *CloudConfigurationFindingsSecretsConfig {
	this := CloudConfigurationFindingsSecretsConfig{}
	return &this
}

// NewCloudConfigurationFindingsSecretsConfigWithDefaults instantiates a new CloudConfigurationFindingsSecretsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCloudConfigurationFindingsSecretsConfigWithDefaults() *CloudConfigurationFindingsSecretsConfig {
	this := CloudConfigurationFindingsSecretsConfig{}
	return &this
}

// GetClientId returns the ClientId field value if set, zero value otherwise.
func (o *CloudConfigurationFindingsSecretsConfig) GetClientId() ModelsSecret {
	if o == nil || IsNil(o.ClientId) {
		var ret ModelsSecret
		return ret
	}
	return *o.ClientId
}

// GetClientIdOk returns a tuple with the ClientId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CloudConfigurationFindingsSecretsConfig) GetClientIdOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.ClientId) {
		return nil, false
	}
	return o.ClientId, true
}

// HasClientId returns a boolean if a field has been set.
func (o *CloudConfigurationFindingsSecretsConfig) HasClientId() bool {
	if o != nil && !IsNil(o.ClientId) {
		return true
	}

	return false
}

// SetClientId gets a reference to the given ModelsSecret and assigns it to the ClientId field.
func (o *CloudConfigurationFindingsSecretsConfig) SetClientId(v ModelsSecret) {
	o.ClientId = &v
}

// GetClientSecret returns the ClientSecret field value if set, zero value otherwise.
func (o *CloudConfigurationFindingsSecretsConfig) GetClientSecret() ModelsSecret {
	if o == nil || IsNil(o.ClientSecret) {
		var ret ModelsSecret
		return ret
	}
	return *o.ClientSecret
}

// GetClientSecretOk returns a tuple with the ClientSecret field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CloudConfigurationFindingsSecretsConfig) GetClientSecretOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.ClientSecret) {
		return nil, false
	}
	return o.ClientSecret, true
}

// HasClientSecret returns a boolean if a field has been set.
func (o *CloudConfigurationFindingsSecretsConfig) HasClientSecret() bool {
	if o != nil && !IsNil(o.ClientSecret) {
		return true
	}

	return false
}

// SetClientSecret gets a reference to the given ModelsSecret and assigns it to the ClientSecret field.
func (o *CloudConfigurationFindingsSecretsConfig) SetClientSecret(v ModelsSecret) {
	o.ClientSecret = &v
}

func (o CloudConfigurationFindingsSecretsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CloudConfigurationFindingsSecretsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ClientId) {
		toSerialize["client_id"] = o.ClientId
	}
	if !IsNil(o.ClientSecret) {
		toSerialize["client_secret"] = o.ClientSecret
	}
	return toSerialize, nil
}

type NullableCloudConfigurationFindingsSecretsConfig struct {
	value *CloudConfigurationFindingsSecretsConfig
	isSet bool
}

func (v NullableCloudConfigurationFindingsSecretsConfig) Get() *CloudConfigurationFindingsSecretsConfig {
	return v.value
}

func (v *NullableCloudConfigurationFindingsSecretsConfig) Set(val *CloudConfigurationFindingsSecretsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableCloudConfigurationFindingsSecretsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableCloudConfigurationFindingsSecretsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCloudConfigurationFindingsSecretsConfig(val *CloudConfigurationFindingsSecretsConfig) *NullableCloudConfigurationFindingsSecretsConfig {
	return &NullableCloudConfigurationFindingsSecretsConfig{value: val, isSet: true}
}

func (v NullableCloudConfigurationFindingsSecretsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCloudConfigurationFindingsSecretsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


