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

// checks if the OauthActivitySecretsConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OauthActivitySecretsConfig{}

// OauthActivitySecretsConfig Google Workspace OAuth Activity secrets
type OauthActivitySecretsConfig struct {
	CredentialsJson *ModelsSecret `json:"credentials_json,omitempty"`
	OauthToken *ModelsSecret `json:"oauth_token,omitempty"`
}

// NewOauthActivitySecretsConfig instantiates a new OauthActivitySecretsConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOauthActivitySecretsConfig() *OauthActivitySecretsConfig {
	this := OauthActivitySecretsConfig{}
	return &this
}

// NewOauthActivitySecretsConfigWithDefaults instantiates a new OauthActivitySecretsConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOauthActivitySecretsConfigWithDefaults() *OauthActivitySecretsConfig {
	this := OauthActivitySecretsConfig{}
	return &this
}

// GetCredentialsJson returns the CredentialsJson field value if set, zero value otherwise.
func (o *OauthActivitySecretsConfig) GetCredentialsJson() ModelsSecret {
	if o == nil || IsNil(o.CredentialsJson) {
		var ret ModelsSecret
		return ret
	}
	return *o.CredentialsJson
}

// GetCredentialsJsonOk returns a tuple with the CredentialsJson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OauthActivitySecretsConfig) GetCredentialsJsonOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.CredentialsJson) {
		return nil, false
	}
	return o.CredentialsJson, true
}

// HasCredentialsJson returns a boolean if a field has been set.
func (o *OauthActivitySecretsConfig) HasCredentialsJson() bool {
	if o != nil && !IsNil(o.CredentialsJson) {
		return true
	}

	return false
}

// SetCredentialsJson gets a reference to the given ModelsSecret and assigns it to the CredentialsJson field.
func (o *OauthActivitySecretsConfig) SetCredentialsJson(v ModelsSecret) {
	o.CredentialsJson = &v
}

// GetOauthToken returns the OauthToken field value if set, zero value otherwise.
func (o *OauthActivitySecretsConfig) GetOauthToken() ModelsSecret {
	if o == nil || IsNil(o.OauthToken) {
		var ret ModelsSecret
		return ret
	}
	return *o.OauthToken
}

// GetOauthTokenOk returns a tuple with the OauthToken field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OauthActivitySecretsConfig) GetOauthTokenOk() (*ModelsSecret, bool) {
	if o == nil || IsNil(o.OauthToken) {
		return nil, false
	}
	return o.OauthToken, true
}

// HasOauthToken returns a boolean if a field has been set.
func (o *OauthActivitySecretsConfig) HasOauthToken() bool {
	if o != nil && !IsNil(o.OauthToken) {
		return true
	}

	return false
}

// SetOauthToken gets a reference to the given ModelsSecret and assigns it to the OauthToken field.
func (o *OauthActivitySecretsConfig) SetOauthToken(v ModelsSecret) {
	o.OauthToken = &v
}

func (o OauthActivitySecretsConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OauthActivitySecretsConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CredentialsJson) {
		toSerialize["credentials_json"] = o.CredentialsJson
	}
	if !IsNil(o.OauthToken) {
		toSerialize["oauth_token"] = o.OauthToken
	}
	return toSerialize, nil
}

type NullableOauthActivitySecretsConfig struct {
	value *OauthActivitySecretsConfig
	isSet bool
}

func (v NullableOauthActivitySecretsConfig) Get() *OauthActivitySecretsConfig {
	return v.value
}

func (v *NullableOauthActivitySecretsConfig) Set(val *OauthActivitySecretsConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableOauthActivitySecretsConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableOauthActivitySecretsConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOauthActivitySecretsConfig(val *OauthActivitySecretsConfig) *NullableOauthActivitySecretsConfig {
	return &NullableOauthActivitySecretsConfig{value: val, isSet: true}
}

func (v NullableOauthActivitySecretsConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOauthActivitySecretsConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


