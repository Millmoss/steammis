using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClickandDrag : MonoBehaviour
{
    private Rigidbody rb3d;
    private Camera c;

    void Start()
    {
        rb3d = GetComponent<Rigidbody>();
        c = FindObjectOfType<Camera>();

    }

    

    private void Update()
    {

        void OnMouseClick() {

            Vector3 wow = transform.position - c.transform.position;
            Vector3 dir = new Vector3(wow.x, wow.y, wow.z);

            dir.Normalize();

            rb3d.AddForce(dir);

            Ray r = c.ScreenPointToRay(Input.mousePosition);
            RaycastHit rh;

            if (Physics.Raycast(r, out rh, 50))
            {
                print(rh.point);
            }
        }

        OnMouseClick();


        
    }


}
