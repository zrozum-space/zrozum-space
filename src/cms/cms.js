import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ReadingsPreview from './preview-templates/ReadingsPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('articles', BlogPostPreview)
CMS.registerPreviewTemplate('readings', ReadingsPreview)
