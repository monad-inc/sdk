# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.entra_id_secrets_config import EntraIdSecretsConfig

class TestEntraIdSecretsConfig(unittest.TestCase):
    """EntraIdSecretsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> EntraIdSecretsConfig:
        """Test EntraIdSecretsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `EntraIdSecretsConfig`
        """
        model = EntraIdSecretsConfig()
        if include_optional:
            return EntraIdSecretsConfig(
                client_id = '',
                client_secret = ''
            )
        else:
            return EntraIdSecretsConfig(
        )
        """

    def testEntraIdSecretsConfig(self):
        """Test EntraIdSecretsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
