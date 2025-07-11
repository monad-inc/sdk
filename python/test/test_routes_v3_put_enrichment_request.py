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

from monad.models.routes_v3_put_enrichment_request import RoutesV3PutEnrichmentRequest

class TestRoutesV3PutEnrichmentRequest(unittest.TestCase):
    """RoutesV3PutEnrichmentRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesV3PutEnrichmentRequest:
        """Test RoutesV3PutEnrichmentRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesV3PutEnrichmentRequest`
        """
        model = RoutesV3PutEnrichmentRequest()
        if include_optional:
            return RoutesV3PutEnrichmentRequest(
                config = monad.models.secret_processesor/enrichment_config.secret_processesor.EnrichmentConfig(
                    secrets = {
                        'key' : null
                        }, 
                    settings = {
                        'key' : null
                        }, ),
                description = '',
                name = '',
                type = ''
            )
        else:
            return RoutesV3PutEnrichmentRequest(
        )
        """

    def testRoutesV3PutEnrichmentRequest(self):
        """Test RoutesV3PutEnrichmentRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
