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

// checks if the ModelsOrganizationUser type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelsOrganizationUser{}

// ModelsOrganizationUser struct for ModelsOrganizationUser
type ModelsOrganizationUser struct {
	AuthId *string `json:"auth_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	RoleId *string `json:"role_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Username *string `json:"username,omitempty"`
}

// NewModelsOrganizationUser instantiates a new ModelsOrganizationUser object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelsOrganizationUser() *ModelsOrganizationUser {
	this := ModelsOrganizationUser{}
	return &this
}

// NewModelsOrganizationUserWithDefaults instantiates a new ModelsOrganizationUser object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelsOrganizationUserWithDefaults() *ModelsOrganizationUser {
	this := ModelsOrganizationUser{}
	return &this
}

// GetAuthId returns the AuthId field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetAuthId() string {
	if o == nil || IsNil(o.AuthId) {
		var ret string
		return ret
	}
	return *o.AuthId
}

// GetAuthIdOk returns a tuple with the AuthId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetAuthIdOk() (*string, bool) {
	if o == nil || IsNil(o.AuthId) {
		return nil, false
	}
	return o.AuthId, true
}

// HasAuthId returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasAuthId() bool {
	if o != nil && !IsNil(o.AuthId) {
		return true
	}

	return false
}

// SetAuthId gets a reference to the given string and assigns it to the AuthId field.
func (o *ModelsOrganizationUser) SetAuthId(v string) {
	o.AuthId = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetCreatedAt() string {
	if o == nil || IsNil(o.CreatedAt) {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetCreatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasCreatedAt() bool {
	if o != nil && !IsNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *ModelsOrganizationUser) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *ModelsOrganizationUser) SetEmail(v string) {
	o.Email = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ModelsOrganizationUser) SetId(v string) {
	o.Id = &v
}

// GetRoleId returns the RoleId field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetRoleId() string {
	if o == nil || IsNil(o.RoleId) {
		var ret string
		return ret
	}
	return *o.RoleId
}

// GetRoleIdOk returns a tuple with the RoleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetRoleIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoleId) {
		return nil, false
	}
	return o.RoleId, true
}

// HasRoleId returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasRoleId() bool {
	if o != nil && !IsNil(o.RoleId) {
		return true
	}

	return false
}

// SetRoleId gets a reference to the given string and assigns it to the RoleId field.
func (o *ModelsOrganizationUser) SetRoleId(v string) {
	o.RoleId = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetUpdatedAt() string {
	if o == nil || IsNil(o.UpdatedAt) {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetUpdatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.UpdatedAt) {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasUpdatedAt() bool {
	if o != nil && !IsNil(o.UpdatedAt) {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *ModelsOrganizationUser) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

// GetUsername returns the Username field value if set, zero value otherwise.
func (o *ModelsOrganizationUser) GetUsername() string {
	if o == nil || IsNil(o.Username) {
		var ret string
		return ret
	}
	return *o.Username
}

// GetUsernameOk returns a tuple with the Username field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsOrganizationUser) GetUsernameOk() (*string, bool) {
	if o == nil || IsNil(o.Username) {
		return nil, false
	}
	return o.Username, true
}

// HasUsername returns a boolean if a field has been set.
func (o *ModelsOrganizationUser) HasUsername() bool {
	if o != nil && !IsNil(o.Username) {
		return true
	}

	return false
}

// SetUsername gets a reference to the given string and assigns it to the Username field.
func (o *ModelsOrganizationUser) SetUsername(v string) {
	o.Username = &v
}

func (o ModelsOrganizationUser) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelsOrganizationUser) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AuthId) {
		toSerialize["auth_id"] = o.AuthId
	}
	if !IsNil(o.CreatedAt) {
		toSerialize["created_at"] = o.CreatedAt
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.RoleId) {
		toSerialize["role_id"] = o.RoleId
	}
	if !IsNil(o.UpdatedAt) {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	if !IsNil(o.Username) {
		toSerialize["username"] = o.Username
	}
	return toSerialize, nil
}

type NullableModelsOrganizationUser struct {
	value *ModelsOrganizationUser
	isSet bool
}

func (v NullableModelsOrganizationUser) Get() *ModelsOrganizationUser {
	return v.value
}

func (v *NullableModelsOrganizationUser) Set(val *ModelsOrganizationUser) {
	v.value = val
	v.isSet = true
}

func (v NullableModelsOrganizationUser) IsSet() bool {
	return v.isSet
}

func (v *NullableModelsOrganizationUser) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelsOrganizationUser(val *ModelsOrganizationUser) *NullableModelsOrganizationUser {
	return &NullableModelsOrganizationUser{value: val, isSet: true}
}

func (v NullableModelsOrganizationUser) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelsOrganizationUser) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


