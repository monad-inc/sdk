# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.google_cloud_storage_output_secrets_config import GoogleCloudStorageOutputSecretsConfig

class TestGoogleCloudStorageOutputSecretsConfig(unittest.TestCase):
    """GoogleCloudStorageOutputSecretsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GoogleCloudStorageOutputSecretsConfig:
        """Test GoogleCloudStorageOutputSecretsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GoogleCloudStorageOutputSecretsConfig`
        """
        model = GoogleCloudStorageOutputSecretsConfig()
        if include_optional:
            return GoogleCloudStorageOutputSecretsConfig(
                credentials_json = monad.models.models/secret.models.Secret(
                    created_at = '', 
                    description = '', 
                    id = '', 
                    name = '', 
                    organization_id = '', 
                    updated_at = '', 
                    value = '', )
            )
        else:
            return GoogleCloudStorageOutputSecretsConfig(
        )
        """

    def testGoogleCloudStorageOutputSecretsConfig(self):
        """Test GoogleCloudStorageOutputSecretsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
